import Getiryemek from './index'

test('should create a getiryemek object ', () => {
    const getir = new Getiryemek('http')
    expect(getir.print()).toEqual('http')
})