import { Details, SectionDetail } from '../types/Details';
import { Menu } from '../types/Menu';
import { mockDetailsData } from './../__test__/mockData/MockDetailData';


export const filterMenuTitle =() =>{
    const menuList: Array<Menu> = mockDetailsData.section.detail.map((data)=>{
        const menu:Menu ={
            name:data.name,
            transliteration:data.transliteration,
            translation: data.translation,
            number: data.number,
            chapter:data?.chapterGroup?.detail
        }
        return menu
    })
    return menuList
}
export const filterSections =(number:number) =>{
    const sectionList = mockDetailsData.section.detail.filter((data)=>{
        return (data.number === number) ?? data
    })
    return sectionList
}