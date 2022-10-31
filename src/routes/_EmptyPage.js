import { Link } from 'react-router-dom';

export default function EmptyPage({ btnClass }) {
    return (
        <div>
            <h1 style={{ marginBottom: "170px" }}>&nbsp;</h1> {/* '&nbsp;' is empty space */}
            <div style={{ fontSize: "50px", marginLeft: "200px" }}>
                <div>Page Not Found (404)</div>
                <div>This is not the page you're looking for.</div>
                <Link to="/" >
                    <div className={btnClass} style={{
                        borderRadius: "20px",
                        fontSize: '50px',
                        width: "160px"
                    }}>
                        Return
                    </div>
                </Link>
            </div>
        </div>
    );
}