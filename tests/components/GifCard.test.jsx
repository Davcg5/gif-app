import { render, screen } from "@testing-library/react"
import GifCard from "../../src/components/GifCard"

describe('Tests in GifCard', () => {
    const title = 'Goku'
    const url = 'https://goku.com/'  
    test('should match the snapshot', () => { 
    
        const {container} = render (
            <GifCard title={title} url = {url}/>
        )
        expect(container).toMatchSnapshot();
    })

    test('should show image with url and said alt', () => { 
        render (
            <GifCard title={title} url = {url}/>
        )
        //screen.debug()

        const {alt, src} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('should show title in the component', () => { 
        render (
            <GifCard title={title} url = {url}/>
        )
        expect(screen.getByText(title)).toBeTruthy();
    })
})