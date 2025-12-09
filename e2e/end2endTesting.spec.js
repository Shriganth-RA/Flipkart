import {test, expect} from '@playwright/test'


test.describe('Unit Testing on Flipkart Website', () => {
      
      test.describe('Header Section Functionality', () => {

            test.beforeEach(async({page}) => {
                  await page.goto('https://www.flipkart.com/');
            })

            // test('Test a filpkart logo', async({page}) => {
            //       const logo = page.locator('div[class="_16ZfEv"]');
            //       await logo.isVisible();
            // })

            test('Test a Cart menu', async({page}) => {
                  const cart = page.locator('a[class="_3RX0a-"]');
                  await cart.isVisible();
                  await cart.click();
            })

            test('Test a Beacome a seller menu', async({page}) => {
                  const cart = page.locator('a[class="_3RX0a- _3jeYYh"]');
                  await cart.isVisible();
                  await cart.click();
            })

            test('Test a Search bar', async({page}) => {
                  const search_bar = page.locator('input[class="Pke_EE"]');
                  await search_bar.isVisible();
                  await search_bar.fill('Dell laptop');
                  await page.keyboard.press('Enter');
            })

            test('Test a login dropdown', async({page}) => {
                  const login = page.locator('img[class="-dOa_b L_FVxe"]');
                  await login.isVisible();

                  const drop_down = page.locator('ul[class="_3YjYK7 ecs1XG"]');
                  await drop_down.isVisible();

                  const my_profile = page.getByTitle('My Profile');
                  await my_profile.isVisible();
                  // await my_profile.click();

                  const flipkart_plus_zone = page.getByTitle('Flipkart Plus Zone');
                  await flipkart_plus_zone.isVisible();
                  // await flipkart_plus_zone.click();

                  const orders = page.locator('a[title="Orders"]');
                  await orders.isVisible();
                  // await orders.click();

                  const wishlist = page.getByTitle('Wishlist');
                  await wishlist.isVisible();
                  // await wishlist.click();

                  const rewards = page.getByTitle('Rewards');
                  await rewards.isVisible();
                  // await rewards.click();

                  const gift_cards = page.getByTitle('Gift Cards');
                  await gift_cards.isVisible();
                  // await gift_cards.click();
            })
      })


      test.describe('Test a product page', () => {
            
            test.beforeEach(async({page}) => {
                  await page.goto('https://www.flipkart.com/');
            })

            test('Testing a product', async({page}) => {
                  const search_bar = page.locator('input[class="Pke_EE"]');
                  await search_bar.isVisible();
                  await search_bar.fill('Dell laptop');
                  await page.keyboard.press('Enter');

                  const product = page.getByText('HP Victus Intel Core i5 13th Gen');
                  await product.isVisible();
                  await product.click();

                  // Check the product name is displayed
                  const product_name = page.locator('h1[class="_6EBuvT"]');
                  await product_name.isVisible();

                  // Check the product price is displayed
                  const product_price = page.locator('div[class="Nx9bqj CxhGGd"]');
                  await product_price.isVisible();

                  // Verify the Cart button
                  const cart = page.locator('button[class="QqFHMw vslbG+ In9uk2"]');
                  await cart.isVisible();

                  // Verify the Buy now button
                  const buy_now = page.locator('button[class="QqFHMw vslbG+ _3Yl67G _7Pd1Fp"]');
                  await buy_now.isVisible();

                  // Verify the product description
                  const description = page.locator('div[class="Zg-WCR"]');
                  await description.isVisible();
            })
      })


      // test.describe('Test a cart page', () => {

      //       test.beforeEach(async({page}) => {
      //             await page.goto('https://www.flipkart.com/');
      //       })

      //       test('Testing a product on cart', async({page}) => {
      //             const search_bar = page.locator('input[class="Pke_EE"]');
      //             await search_bar.isVisible();
      //             await search_bar.fill('Dell laptop');
      //             await page.keyboard.press('Enter');

      //             const product = page.locator('div[class="lvJbLV col-12-12"]');
      //             await product.isVisible();
      //             await product.first().click();
      //             console.log("Product clicked!");

      //             // Verify the Cart button
      //             const cart = page.locator('svg[class="kV7kR_"]');
      //             await cart.isVisible();
      //             await cart.click();
      //             console.log("Product add to cart");

      //             // Check the product in cart page
      //             const cart_item = page.locator('div[class="eGXlor pk3Guc"]');
      //             await cart_item.isVisible();
      //       })
      // })
      
})