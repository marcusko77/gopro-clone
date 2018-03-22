select products.product_id, product_name, description, price, phrase, array_agg(pictures.imgurl) as pictures 
from products
left join pictures on pictures.product_id = products.product_id
group by products.product_id
order by product_id