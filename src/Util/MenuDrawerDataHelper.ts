import { Details, SectionDetail } from '../types/Details';
import { Menu } from '../types/Menu';
import { mockDetailsData } from '../__test__/mockData/MockDetailData';
import { mockKural } from '../__test__/mockData/MockKuralData';


export const filterMenuTitle = () => {
    const menuList: Array<Menu> = mockDetailsData.section.detail.map((data) => {
        const chapterGroupData = data.chapterGroup?.detail
        const menu: Menu = {
            name: data.name,
            transliteration: data.transliteration,
            translation: data.translation,
            number: data.number,
            chapterGroup: chapterGroupData
        }
        return menu
    })
    return menuList
}
export const filterSections = (number: number) => {
    const sectionList = mockDetailsData.section.detail.filter((data) => {
        return (data.number === number) ?? data
    })
    return sectionList
}

export const kuralList = (start: number, end: number) => {
    return mockKural.slice(start, end)
}