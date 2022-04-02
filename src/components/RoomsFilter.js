import React, { useContext } from 'react'
import { RoomsContext } from '../ContextProvider'
function RoomsFilter() {
    const context = useContext(RoomsContext);
    const {
        type,
        capacity,
        price,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context.data;
    const handleChange = context.handleChange

    return (
        <form className='filter-form'>
            <div className='form-group'>

                <label htmlFor='room-type'>Room Type</label>
                <select
                    className='form-control'
                    id="room-type"
                    name='type'
                    value={type}
                    onChange={handleChange}
                >
                    <option value="all">All</option>
                    <option value="presidential">Presidential</option>
                    <option value="family">Family</option>
                    <option value="double">Double</option>
                    <option value="single">Single</option>
                </select>

            </div>
            <div className='form-group'>
                <label htmlFor='guests'>Guests</label>
                <input type='number' name='capacity' id='guests' value={capacity === 0 ? 1 : capacity} onChange={handleChange} />

            </div>
            <div className='form-group'>
                <label htmlFor="room-price">Room Price {'$' + price || 'dollar'}</label>
                <input
                    type="range"
                    id='room-price'
                    name="price"
                    min='100'
                    max='1000'
                    step='50'
                    value={price}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group '>
                <label >Room Size</label>
                <div className='size-inputs'>
                    <input className='size-input' type="number" name='minSize' value={minSize} onChange={handleChange} />
                    <input className='size-input' type="number" name='maxSize' value={maxSize} onChange={handleChange} />
                </div>
            </div>
            <div className='form-group '>
                <div className='single-extra'>
                    <input
                        type="checkbox"
                        name="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                    />
                    <label > Breakfast</label>
                </div>
                <div className='single-extra'>
                    <input
                        type="checkbox"
                        name="pets"
                        checked={pets}
                        onChange={handleChange}
                    />
                    <label > Pets</label>
                </div>
            </div>
        </form>

    )
}

export default RoomsFilter