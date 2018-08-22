import Realm from 'realm'

const favsSchema = {
  name: 'Favs',
  primaryKey: 'id',
  properties: {
    id: 'string',
    favdOn: 'date',
  },
}

const realm = new Realm({ schema: [favsSchema] })

export const addFav = id => {
  realm.write(() => {
    realm.create('Favs', {
      id,
      favdOn: new Date(),
    })
  })
}
export const removeFav = id => {
  return realm.write(() => {
    const favToRemove = realm.objects('Favs').filtered(`id == $0`, id)
    realm.delete(favToRemove)
  })
}
export const getFavs = () => {
  return realm.objects('Favs')
}

export default realm
