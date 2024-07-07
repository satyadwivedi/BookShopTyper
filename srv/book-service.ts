import cds from '@sap/cds';
import { Request, Service } from '@sap/cds'

interface message {
  type: string; // W, I, E, S 
  code: number; // 500, 202, etc
  desc: string 
}


export default (srv: Service )=>  { 
    srv.before('CREATE', 'Books', async (req: Request) => {
            console.log('before creating Books')
            //const { CampaignHeader } = require('#cds-models/sap/capire/bookshop')
           
            const { Books } = await import('#cds-models/sap/capire/bookshop')

         //  console.log('CampaignHeader', CampaignHeader)
           
    })

    srv.on('someAction', async (req: Request) => {
      console.log('start someAction')

      console.log('req.data', req.data)

      let ID = req.data.ID

      const { CampaignHeader } = cds.entities('sap.capire.bookshop')

     //const { CampaignHeader } = await import('#cds-models/sap/capire/bookshop')
      //const { CampaignHeader } = require('#cds-models/sap/capire/bookshop')

      const aCampaignData = await SELECT.from(CampaignHeader).where({'ID': ID})

      if(aCampaignData) return 'S'

      return 'E'

    })
}  

