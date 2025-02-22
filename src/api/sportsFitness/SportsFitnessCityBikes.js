import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const SportsFitnessCityBikes = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/SportsFitnessDash" route2="/CityBikes" />
      <ApiPageInfo
        title={"CityBikes"}
        linkUrl={"https://api.citybik.es/v2/"}
        description={"CityBikes data."}
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="http://api.citybik.es/v2" />

        {/* Endpoint */}
        <Endpoints
          header="GET"
          endpoint="/networks"
          description="Returns all networks."
        />
      </Box>
    </Box>
  );
};

export default SportsFitnessCityBikes;
