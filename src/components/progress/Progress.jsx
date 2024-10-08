import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Progress.module.css";

const Progress = ({
    value = "65",
    title = "HTML",
    color = "cadetblue",
    type = "circle"
}) => {
    const [barStyle, setBarStyle] = useState({ width: "0%" });
    const [circleStyle, setCircleStyle] = useState({ strokeDashoffset: 273 });

    const length = 100;
    const innerLength = 74;

    useEffect(() => {
        const updateCircleStyle = () => {
            const circleElement = document.querySelector(`.${classes.circle}`);
            const circleLength = circleElement?.getTotalLength() ?? 0;

            setCircleStyle({
                stroke: color,
                strokeDashoffset: ((100 - Number(value)) * circleLength) / 100,
                strokeDasharray: circleLength
            });
        };

        if (type === "bar") {
            setBarStyle({
                width: `${value}%`,
                backgroundColor: color
            });
        } else if (type === "circle") {
            updateCircleStyle();
        }

        /*
        match (type) {
            "bar" => {
                setBarStyle({
                    width: `${value}%`,
                    backgroundColor: color
                });
            },
            "circle" => updateCircleStyle(),
            _ => console.warn('Неизвестный тип прогресса:', type)
        }
        */
    }, [color, type, value]);

    return (
        <>
            {type === "bar" && (
                <div>
                    <p className="mb-0">{title}</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={barStyle}
                            aria-valuenow={Number(value)}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {value}%
                        </div>
                    </div>
                </div>
            )}

            {type === "circle" && (
                <div className="d-flex flex-column align-items-center pe-3 justify-content-space-between">
                    <div className={classes.wrapper}>
                        <div className={classes.outer}>
                            <div className={classes.inner}>{value}%</div>
                        </div>
                        <svg
                            className={classes.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                        >
                            <circle
                                className={classes.circle}
                                style={circleStyle}
                                cx={length / 2}
                                cy={length / 2}
                                r={(length + innerLength) / 4}
                            />
                        </svg>
                    </div>
                    <p className="mb-0">{title}</p>
                </div>
            )}
        </>
    );
};

Progress.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string
};

export default Progress;
