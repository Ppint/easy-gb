import Image from "next/image";
import Script from "next/script";
import React from "react";

type dataType = {
  rememberCard: boolean;
  card: {
    number: string;
    expirationMonth: string;
    expirationYear: string;
    securityCode: string;
    name: string;
  };
};

export default function Home() {
  const cardinfo = [
    {
      rememberCard: false,
      card: {
        number: "4535017710535741",
        expirationMonth: "05",
        expirationYear: "28",
        securityCode: "184",
        name: "Card Test UAT (Server Test)",
      },
    },
  ];
  const publicKey = "pk_test_3d5ebd7a-7b1a-4f6a-8c0e-5a0e5d2e1bce";
  fetch("api.gbprimepay.com/v2/tokens", {
    method: "POST",
    body: JSON.stringify(cardinfo),
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Basic ${btoa(publicKey + ':')}`
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  return <div></div>;
}
