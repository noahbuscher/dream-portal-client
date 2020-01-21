import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Alignments = {
    CENTER: "center"
}

export const Types = {
    INFO: "info",
}

const Card = ({
    children,
    align,
    type,
}) => {
    const classNames = classnames("card", {
        "text-center": align === Alignments.CENTER,
        "bg-info": type === Types.INFO,
    });

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

Card.propTypes = {
    align: PropTypes.oneOf(Object.values(Alignments)),
    type: PropTypes.oneOf(Object.values(Types)),
};

export const CardBody = ({
    children,
}) => (
    <div className="card-body">
        {children}
    </div>
);

export const CardFooter = ({
    children,
}) => (
    <div className="card-footer">
        {children}
    </div>
);

export default Card;