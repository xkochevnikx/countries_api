import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { searchByCountry } from "../components/Config/Config";
import { Button } from "../components/UI/Button/Button";
import { Info } from "../components/Info/Info";

const Details = () => {
  const { name } = useParams();

  const navigate = useNavigate();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(searchByCountry(name))
      .then(response => setCountry(response.data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(`/homepages`)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} />}
    </div>
  );
};

export default Details;
