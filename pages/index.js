import Layout from "../Components/Layout";
import Image from "next/image";
import db from "../utils/db";
import ProductModel from "../models/Product";
import {products} from "../utils/data"
import Nextlink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  Button,
} from "@material-ui/core";
export default function Home(props) {
   
  console.log(props.products)
  return (
    <div>
      <Layout>
        <h2>Products</h2>
        <Grid container>
          {props.products.map((val, index) => (
            <div key={index}>
              <Grid item md={4}>
                <Card style={{ marginBottom: 10 }}>
                  {val.title}
                  <Nextlink href={`/products/${val.slug}`} passHref>
                    <CardActionArea>
                      <Image
                        src={val.image}
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
  await db.connect();
  const products = await ProductModel.find().lean();
  await db.disconnect();
  return {
    props: {
      products:products.map(db.DataToObj),
    },
  };
}
