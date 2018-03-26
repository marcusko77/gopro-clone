delete  from cart
where user_id = $1 ;

SELECT  products.product_id, product_name, SUM(price) as price, COUNT(*) as quantity
FROM products
LEFT JOIN cart ON products.product_id = cart.product_id
WHERE user_id = $1
GROUP BY products.product_id