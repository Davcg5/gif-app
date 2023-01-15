import {getGifs} from '../../src/helpers/getGifs'

describe('Test on getGifs', () => {
    test('should return an array of strings', async() => {
        const gifsList = await getGifs('Goku');
        expect(gifsList.length).toBeGreaterThan(0);
        expect(gifsList[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})