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
import { products } from "../utils/data";
export default function Home(props) {
  // console.log(props);
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div>
      <Layout>
        <h2>Products</h2>
        <Grid container>
          {products.map((val, index) => (
            <div key={index}>
              <Grid item md={4}>
                <Card style={{ marginBottom: 10 }}>
                  {val.name}
                  <Nextlink href={`/products/${val.slug}`} passHref>
                    <CardActionArea>
                      <Image
                        src={val.image}
                        width={500}
                        height={300}
                        alt="image"
                        priority={true}
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
