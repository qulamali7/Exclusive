import React from "react";
import "./index.scss";
import BestProductCard from "../BestProductCard";

const BestProductCards = () => {
  const data = [
    {
      id: 1,
      image: "https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1703462400&Signature=iDmVsv8GQsUE0RG1KvOewBnDWr0c4ksCfi6opYDbkxeJdfwZcNohOHMpoc9Jin6HQGBdO8ZAtzp4i0iAEs56j0Hkcbc6slb0VAcun9eWnXsSnt5fSG9B~Cpm6I5cg4crqV5cNKlmuUhIeD3Ol~CBUjBd4U6VXFSm7FI2kz3DoWAB9XN~I7tR4-Eva5Hr6oG9IldshxVM94OwcEuQ-sRWI9AxD3yJXgzJbDvYiF-sWHhrCOnktfoSrToc2jJ454Pk1JTpM5Q1Nq4sLHZnP~SGSpcNwNuowWUwFbQBXQOu0EYwTNSsKz9GTzB4RKftIiLCfEtr9k3-I6oIYAm9HB-tuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "The north coat",
      price: 260,
      saleprice: 360,
    },
    {
      id: 2,
      image: "https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1703462400&Signature=XknpS6uztl-ZOGLF1fQD2KvQYOHZAj87dh8DdiKDOj98zpEoCAq4R~t4KSK5DYmEYQHcDwCiO5McoNMCO3~kYVBWzQcLhAedOGRhtHTMVeQOvye0LSayns8Ot56qTA2Cu~OIIG3ms3TQ-5T4B-PtwCEPkKI~YffHo64GX-4lSrku8qTv0XwRlPlDUzcviuiNZVdq8hZhHJDF-pQzcQCwhlq-NY6Dv09lfTiVwgFvjrI26dM56R0Xk7lUmhX6JvOKPSODbNf~bx5laEktIgyOcV36UZR14E9T5bYKhnTQcgCHVwCH5mZPi~T~1xtg~-ytKNQurrtnFTgqEyukW8scrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Gucci duffle bag",
      price: 960,
      saleprice: 360,
    },
    {
      id: 3,
      image: "https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1703462400&Signature=irFqgjxlZYHUr1g3SPD1vkaSUiTwRe~sWFgypPao4~RFUIQrrClzOXlsawykSAt9gBALgYtxLCacNPCxdma8YhOpXbgYqrn56oqJuXhG3i72CKAI6kkDT5-FVOVKav8OkZPL7uVJnmvqhmqC1GVbMCP~HNcHgb7nw84jhw19kDiOKAJgB9zQd0b37cMswIkJZLwJ6hMhrbgvHRLy6clrtYQS0DKZ~jj14WhtCNLFVgnpyQWAG96KkFW01e7vDLp7Ym5uOUjtxmAJ~Veo5Qt1Pp3cl7TXsdddwMpVrtn40KhjjvIecRd0zBHDKenwhAQO2JMJp7X6dKBy77E0i6eE-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "RGB liquid CPU Cooler",
      price: 160,
      saleprice: 170,
    },
    {
      id: 4,
      image: "https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1703462400&Signature=a630duB~VCpzNgI4lmGTycV5aUPnsLI4JY1aBaXJoAC9RCqghgGNAQbfCJ8wC98F5MTD8beMRkUBXFn~YgelCI-6oSc9apAh~jOQ9cL7av1J7duBAFltA7eZKoT4uue~jPkD-hON50AZHDixLk2x8~0bfnpBiMHTuWTwqf1EFabz4iuLFeXEEvtm11nRbv0rUkOABAbneZobhoLj7HdLw51VVi9iqRv6hlijJF1lQlrWF9E5fmeQXD7OFrRUz0TdI~01U20sXcpfhm52Kqd2RhGX~TZekoonuyami2iOATuTkrRX1rLEikM8sKxQR9xfVaWPrxkaImkZCNwyOVkGBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Small BookSelf",
      price: 360,
      saleprice: 400,
    },
  ];
  return (
    <>
      <div className="best_product_cards">
        {data.map((x) => (
          <BestProductCard
            x={x}
            id={x.id}
            img={x.image}
            name={x.name}
            price={x.price}
            saleprice={x.saleprice}
          />
        ))}
      </div>
    </>
  );
};

export default BestProductCards;
