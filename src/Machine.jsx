import React from "react";

class Machine extends React.Component {
    render() {
        console.log(this.props);
        const { s1, s2, s3 } = this.props;
        const isLucky = s1 === s2 && s1 === s3;
        return (
            <div>
                <span>{s1}</span>
                <span>{s2}</span>
                <span>{s3}</span>
                <div>{isLucky ? "Lucky" : "Unlucky"}</div>
            </div>
        );
    }
}

export default Machine;
