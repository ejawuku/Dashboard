import React from 'react';
import Summaryitem from './summary-item';

interface TableProps {
    data: any[];
    title: string;
    date?: string;
}

const Table: React.FC<TableProps> = ({ data, title, date }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className='flex justify-between items-center w-full'>
                <div className="text-sm text-headercolor font-[600]">{title}</div>
                <div className="text-xs font-[600] text-headercolor">{date}</div>
            </div>
            <hr/>

            <table className="w-full border-none">
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className={(index + 1) % 2 === 0 ? 'bg-white' : 'bg-tableheadercolor'}
                        >
                            <td>
                                <Summaryitem
                                    image={item.image}
                                    title={item.name}
                                    count={item.count}
                                    value={item.value}
                                    header={item.header}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default Table;