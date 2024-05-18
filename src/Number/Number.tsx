import React from "react";

interface Props {
    numberToShow: number,
    key: number,
}

const Number: React.FC<Props> = ({numberToShow}) => {
    return (
        <div>
            <div className="CircleNumber">
                {numberToShow}
            </div>
        </div>
    );
};

export default Number;