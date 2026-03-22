// Card dinamico
interface CardDProps {
    children: React.ReactNode;
    sizeH?: 1 | 2 | 3 | 4; // 1 = 25%, 2 = 50%, 3 = 75%, 4 = 100%
    sizeV?: 1 | 2;
    title?: string;
}

function CardD(props: CardDProps) {

    const sizeHClasses = {
        1: "w-[25%]",
        2: "w-[50%]",
        3: "w-[75%]",
        4: "w-full"
    };

    const sizeVClasses = {
        1: "h-[40dvh]",
        2: "h-[80dvh]"
    };

    return (
        <div className={`bg-white shadow-2xl p-3 rounded-md ${sizeHClasses[props.sizeH || 4]} ${sizeVClasses[props.sizeV || 1]}`}>
            <h3 className="text-2xl font-bold">{props.title}</h3>
            {props.children}
        </div>
    );
}

export default CardD;