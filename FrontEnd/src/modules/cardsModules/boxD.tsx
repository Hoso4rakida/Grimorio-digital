interface BoxDProps {
    children: React.ReactNode;
    boxW?: 1 | 2 | 3 | 4; // 1 = 25%, 2 = 50%, 3 = 75%, 4 = 100%
    boxH?: 1 | 2; // 1 = 50%, 2 = 100%
}

function BoxD(props: BoxDProps) {
    const boxWClasses = {
        1: "w-[25%]",
        2: "w-[50%]",
        3: "w-[75%]",
        4: "w-full"
    };

    const boxHClasses = {
        1: "h-[50%]",
        2: "h-full"
    };

    return (
        <div className={`p-3 ${boxWClasses[props.boxW || 4]} ${boxHClasses[props.boxH || 2]}`}>
            {props.children}
        </div>
    );

}

export default BoxD;