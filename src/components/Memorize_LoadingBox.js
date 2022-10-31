import styles from '../routes/Memorize.module.css'

// Loading Boxes before datas appear
export default function LoadingBox() {
    
    function Box({ width = "75px", height = "37px", marginL = "-10px" }) {
        return (<div style={{ marginLeft: marginL, marginTop: "-1px" }} id={styles.create}
            className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div className="flex flex-col space-y-3">
                <div style={{ width: width, height: height }} className={`bg-gray-300 rounded-md`}>
                </div>
            </div>
        </div>)
    }

    return (<>
        <div id={styles.loading}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Box />
                <Box marginL={"27px"} />
                <Box marginL={"27px"} />
            </div>
            <br /><br /><br />
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Box width={"120px"} height={"50px"} marginL={"-2%"} />
                <Box width={"120px"} height={"50px"} marginL={"10%"} />
            </div>
        </div>
    </>)

}