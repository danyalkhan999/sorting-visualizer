// Frame Component for rendering list
const Frame = ({ list }) => {
    const getClass = (value) => {
        if (value === 0) return 'cell';
        else if (value === 1) return 'cell current';
        return 'cell done';
    };

    return (
        <div className="frame">
            <div className="array">
                {list.map((element, index) => (
                    <div
                        className={getClass(element.classType)}
                        key={index}
                        style={{ height: `${4 * element.key}px` }}
                        value={element.key}>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frame;
