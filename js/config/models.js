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

export default realm
