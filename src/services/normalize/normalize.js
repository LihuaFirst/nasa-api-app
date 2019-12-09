
const normalizeItem = (item) => ({
   href: item.links[0].href,
   alt: item.data[0].description_508,
   title: item.data[0].title
});

const normalize = {
   search: (items) => {
     return items.map(item => normalizeItem(item));
   }
 };

 export default normalize;