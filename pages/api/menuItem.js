import { getAllItems,getItem } from "../../prisma/menuItems"

export default async function handle (req, res) {
    try {
        switch(req.method) {
            case 'GET': {
                if(req.query.id) {
                    const category = await getItem(req.query.id)
                    return res.status(200).json(category)
                } else {
                    const categories = await getAllItems()
                    return res.json(categories)
                }
            
            }
            default: break
        }
    } catch(error) {
        return res.status(500).json({...error, message: error.message})
    }
}
