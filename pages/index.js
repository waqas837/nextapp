import Layout from "../Components/Layout";
import Image from "next/image";
import Nextlink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  Button,
} from "@material-ui/core";
export default function Home(props) {
  // console.log(props);
  return (
    <div>
      <Layout>
        <h2>Products</h2>
        <Grid container>
          {props.results.data.map((val, index) => (
            <div key={index}>
              <Grid item md={4}>
                <Card style={{ marginBottom: 10 }}>
                  {val.title}
                  <Nextlink href={`/products/${val._id}`} passHref>
                    <CardActionArea>
                      <Image
                        src={val.selectedFile}
                        width={500}
                        height={300}
                        alt="image"
                      />
                    </CardActionArea>
                  </Nextlink>
                  <CardActions>Price:{val.price} </CardActions>
                  <Button color="primary" size="small">
                    Add to cart
                  </Button>
                </Card>
              </Grid>
            </div>
          ))}
        </Grid>
      </Layout>
    </div>
  );
}
// it pre-renders the server side data, if we need it any component we can use it in any component;
export async function getServerSideProps() {
  const getdata = await fetch(
    "https://hst-construction.herokuapp.com/user/getAllTheProduct"
  );
  const results = await getdata.json();
  return {
    props: {
      results,
    },
  };
}
