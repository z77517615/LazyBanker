import dayjs from "dayjs";
import React,{useState} from 'react'

export const useGetdaycolor = (day) => {
    const [style ,setStyle]=useState('')

    const getDayClass = (day) => {
        const currtDay = day.format(format)
        if(nowday === currtDay){
            passpickday(pickday)
            return `${styles.currentDay}`
        }if(pickday === currtDay){
            passpickday(pickday)
            return  `${styles.selected}`
        }
        else{
            return ""
        }
    }
    return {getDayClass ,passpickday ,style};
}
 
