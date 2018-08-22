import Realm from 'realm'

const favsSchema = {
  name: 'Favs',
  primaryKey: 'id',
  properties: {
    id: 'string',
    favd_on: 'date',
  },
}

const realm = new Realm({ schema: [favsSchema] })

export const addFav = (id, favd_on) => {
  realm.write(() => {
    realm.create('Favs', {
      id,
      favd_on,
    })
  })
}
export const removeFav = id => {
  return realm.write(() => {
    realm.delete(id)
  })
}
export const findFavs = () => {
  return realm.objects('Favs')
}

export default realm
