import { useEffect, useState } from "react";
import { dbService } from "../fBase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

// Call Datas whenever to read it (Not for update or delete)

export default function useCallData(
  collectionName,
  dataField,
  order_by = "asc"
) {
  const [dataArr, setDataArr] = useState("");
  useEffect(() => {
    // Call all the documents in 'collectionName'collections in DB thru query
    const q = query(
      collection(dbService, collectionName),
      orderBy(dataField, order_by) //  the order of 'dataField' in the way of 'order_by'
    );
    // Output all datas that is called in array
    onSnapshot(q, (snapshot) => {
      setDataArr(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    });
  }, [collectionName, dataField, order_by]);

  return dataArr;
}
