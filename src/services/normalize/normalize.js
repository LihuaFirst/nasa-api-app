const formatDate = (iso) => {
  let date = new Date(iso);
  let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
  };

  return date.toLocaleString('en-us', options); 
}

const normalizeItem = (item) => ({
   nasa_id: item.data[0].nasa_id,
   href: item.links[0].href,
   title: item.data[0].title,
   description: item.data[0].description,
   alt: (item.data[0].description_508) ? item.data[0].description_508 : item.data[0].description,
   dateCreated: formatDate(item.data[0].date_created)

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