import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs')

describe('Tests for GifGrid', () => {
    const category = "Goku"
    test('should show loading', () => { 
        useFetchGifs.mockReturnValue(
            {
                images:[],
                isLoading: true
            }
        );
        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category))

     })
     test('should show items when isLoading=False', () => {
        const gifs = [
            {
                id:"1",
                title:"Goku1",
                url:"https://localhost/goku1.jpg"
            },
            {
                id:"2",
                title:"Goku2",
                url:"https://localhost/goku2.jpg"
            }
        ]
        useFetchGifs.mockReturnValue(
            {
                images:gifs,
                isLoading: false
            }
        )
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)
     })
})