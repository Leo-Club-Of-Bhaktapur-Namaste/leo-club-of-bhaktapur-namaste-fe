import React from 'react';
import { awards } from 'data/awards';
import { useParams } from 'react-router-dom';

const AwardDetail = () => {
    const { id } = useParams();
    const award = awards.find(award => award.id.toString() === id);
    return (
        <div className='wrapper'>

            <h1>{award?.title}</h1>
            <p>Date: {award.date}</p>
            <div className='border-row' />
            <div className='two-col-grid'>
                <div>
                    {award?.description}
                </div>
                <div>
                    <img src={award?.image} alt={award?.title || "award"} />
                </div>
            </div>

        </div >
    )
}

export default AwardDetail;
