-- 1. Get all the countries that speak Slovene. 
SELECT countries.name, languages.language, languages.percentage 
FROM countries
JOIN languages ON languages.country_id = countries.id
WHERE languages.language = 'Slovene'
ORDER BY languages.percentage DESC;

-- 2. Display total number of cities for each country
SELECT countries.name as "country name", COUNT(cities.name) as total
FROM cities
JOIN countries ON cities.country_id = countries.id
GROUP BY countries.name
ORDER BY total DESC;

-- 3. Get all the cities in Mexico with a population greater than 500,000
SELECT cities.name, cities.population, cities.country_id FROM cities
WHERE cities.population > 500000 AND cities.country_code = 'MEX'
ORDER BY cities.population DESC;

-- 4. Get all the languages in each country with a percentage greater than 89%
SELECT countries.name as 'Country', languages.language, languages.percentage FROM languages
JOIN countries ON countries.id = languages.country_id
WHERE languages.percentage > 89.0
ORDER BY languages.percentage DESC;

-- 5. Get all countries with surface area < 501 and population > 100,000
SELECT countries.name, countries.surface_area, countries.population FROM countries
WHERE countries.surface_area < 501 AND countries.population > 100000;

-- 6. Get countries with only Constitutional Monarchy with capital > 200, and life expectancy > 75
SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy  FROM countries
WHERE countries.government_form = 'Constitutional Monarchy' AND countries.capital > 200 AND countries.life_expectancy > 75;

-- 7. Get all cities in Argentina that are within the Bueno Aires district and have population > 500000
SELECT countries.name as "Country", cities.name as "City", cities.district, cities.population FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE cities.population > 500000 AND cities.district = 'Buenos Aires';

-- 8. Sumarize the number of countries in each region. 
SELECT countries.region, COUNT(countries.name) as "country_count" FROM countries
GROUP BY countries.region
ORDER BY country_count DESC;