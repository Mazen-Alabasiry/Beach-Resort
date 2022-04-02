/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import dataItems from './data'
// import Client from "./contentful";
const RoomsContext = createContext();
function ContextProvider({ children }) {
    const [data, setData] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,

        type: "all",
        capacity: 1,
        price: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    })
    const [allRooms, setAllRooms] = useState([])

    useEffect(() => {

        getData();

    }, []);

    // there is problem with contentful api wont get data
    // const getData = async () => {
    //     try {
    //         let response = await Client.getEntries({
    //             content_type: "beachResort"
    //         });
    //         let maxPrice = Math.max(...rooms.map(item => item.price));
    //         let maxSize = Math.max(...rooms.map(item => item.size));
    //         let rooms = await formatData(response.items);
    //         let featuredRooms = rooms.filter(room => room.featured);
    //         await setData({ ...data, rooms, featuredRooms, sortedRooms: rooms, loading: false, price: maxPrice, maxPrice, maxSize });
    //         await setAllRooms(rooms)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const getData = async () => {

        let rooms = await formatData(dataItems);
        let featuredRooms = rooms.filter(room => room.featured);
        await setData({ ...data, rooms, featuredRooms, sortedRooms: rooms, loading: false, maxSize: 1000 });
        await setAllRooms(rooms)

        // //to check loading component and functionality
        // setTimeout(async () => {
        //     let rooms = await formatData(dataItems);
        //     let featuredRooms = rooms.filter(room => room.featured);
        //     await setData({ ...data, rooms, featuredRooms, sortedRooms: rooms, loading: false, maxSize: 1000 });
        //     await setAllRooms(rooms)
        // }, 4000);
    }

    ////
    const formatData = (items) => {
        let formattedData = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        })
        return formattedData;
    }
    ////
    let handleChange = (e) => {
        let value = e.currentTarget.type === 'checkbox' ? e.currentTarget.checked : e.currentTarget.value
        let name = e.currentTarget.name
        setData({ ...data, [name]: value });

    }
    const filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = data;
        let tempRooms = [...rooms];


        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        //filter by price
        tempRooms = tempRooms.filter(room => room.price >= +price);
        //filter by size
        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );
        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        //filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);

        }
        if (type === 'all') {
            tempRooms = allRooms
        }
        setData(data => ({ ...data, sortedRooms: tempRooms }));
    }
    useEffect(() => {
        filterRooms();
    }, [data.type, data.breakfast, data.capacity, data.pets, data.price, data.maxSize, data.minSize]);

    return (
        <RoomsContext.Provider value={{ data, handleChange }} >{children}</RoomsContext.Provider>
    )
}

export { ContextProvider, RoomsContext }
