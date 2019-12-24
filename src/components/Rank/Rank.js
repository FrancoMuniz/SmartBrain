import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='black bold f3'>
                {`${name}, your current entry count is...`}
                <div className='black bold f2'>
                    {entries}
                </div>
            </div>
        </div>
    );
}

export default Rank;