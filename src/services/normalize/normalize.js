
const normalizeItem = (item) => ({
   nasa_id: item.data[0].nasa_id,
   href: item.links[0].href,
   title: item.data[0].title,
   description: item.data[0].description,
   dateCreated: item.data[0].date_created

});

const normalize = {
   search: (items) => {
     return items.map(item => normalizeItem(item));
   },

   asset: (item) =>{
     return normalizeItem(item);
   }
 };

 export default normalize;