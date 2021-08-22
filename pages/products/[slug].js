import React from "react";
import { useRouter } from "next/router";
import { products } from "../../utils/data";
import Image from "next/image";
import Layout from "../../Components/Layout"
import Nextlink from "next/link"; 
import {
  Box,
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  Link,
  Paper,
  Button,
} from "@material-ui/core";
import { ArrowLeft } from "@material-ui/icons";
const Productname = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((val) => val.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
    <Layout title={product.name}>
    <Box mt={2}>
        <Container>
          <Box my={1}>
            <Nextlink href="/" passHref>
              <Link>
                <Typography variant="body1">
                  <ArrowLeft /> Back to Products

                </Typography>
              </Link>
            </Nextlink>
          </Box>
          <Grid container spacing={3}>
            <Grid item md={5} sm={12}>
              <Image
                src={product.image}
                width={640}
                height={300}
                alt={product.name}
              />
            </Grid>
            <Grid item md={5} sm={12}>
              <Paper style={{ padding: 9 }}>
                <List>
                  <ListItem>Name: {product.name}</ListItem>
                  <ListItem>Price: {product.price}</ListItem>
                </List>

                <Button variant="contained" size="small" color="primary">
                  Add to cart
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <div></div>
      </Box>
    </Layout>

    </div>
  );
};

export default Productname;
