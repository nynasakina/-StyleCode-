//SEED DATA
// app.get("/seed", async (req, res) => {
//   const allProducts = [
    // {
        //       name: "Ophelia Terry Dress ",
        //       desc: "The cutest little terry dress you ever did see. Designed in a simple slip dress shape with our soft and trendy terry fabric. Perfect for the beach, brunch, or anywhere you'd like!",
        //       img: "https://media1.popsugar-assets.com/files/thumbor/L7C3sLadIFIyz7Wk7roPFzL8j3E/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/3b4b3061e59a0925_netimga6fIJK/i/Linen-Blend-Cami-Mini-Dress.jpg",
        //       categories: ["dress"],
        //       size: ["s", "m", "l"],
        //       color: ["blue"],
        //       price: 21.99,
        //     },
        // {
        //           name: "rochet Trim Lace Up Cami Dress",
        //           desc: "The cutest little terry dress you ever did see. Designed in a simple slip dress shape with our soft and trendy terry fabric. Perfect for the beach, brunch, or anywhere you'd like!",
        //           img: "https://media1.popsugar-assets.com/files/thumbor/f99hALn4EJ-__KsIl7VD9qc2NYY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/6c9de5cc6f0a5f44_netimguAHc3v/i/Crochet-Trim-Lace-Up-Cami-Dress.jpg",
        //           categories: ["dress"],
        //           size: ["s", "m", "l"],
        //           color: ["white"],
        //           price: 21.99,
        //         },
        //     {
        //           name: "Striped Linen Blend Cami Dress ",
        //           desc: "The cutest little terry dress you ever did see. Designed in a simple slip dress shape with our soft and trendy terry fabric. Perfect for the beach, brunch, or anywhere you'd like!",
        //           img: "https://media1.popsugar-assets.com/files/thumbor/3hXNqCigaQPWM1lhj9Exy9k3aLw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/b2ab9efcd00f57d4_netimgWdYLgO/i/Striped-Linen-Blend-Cami-Dress.jpg",
        //           categories: ["dress"],
        //           size: ["s", "m", "l"],
        //           color: ["white"],
        //           price: 25.99,
        //         },
        //     {
        //           name: "Crochet Trim Maxi Dress ",
        //           desc: "Steal the show in this Crochet Trim Maxi Dress. It has a crochet trim, flounce sleeves, smocked waist, a tassel tie accent, and front and side slits.",
        //           img: "https://media1.popsugar-assets.com/files/thumbor/3hXNqCigaQPWM1lhj9Exy9k3aLw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/b2ab9efcd00f57d4_netimgWdYLgO/i/Striped-Linen-Blend-Cami-Dress.jpg",
        //           categories: ["dress"],
        //           size: ["s", "m", "l"],
        //           color: ["white"],
        //           price: 29.99,
        //         },
        //     {
        //           name: "Tie-Dye Maxi Dress",
        //           desc: "Steal the show in this Crochet Trim Maxi Dress. It has a crochet trim, flounce sleeves, smocked waist, a tassel tie accent, and front and side slits.",
        //           img: "https://media1.popsugar-assets.com/files/thumbor/j1fNPKoVAsTbXXeJzc5evN-mZNs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/44a2eb874cb271df_netimgwUm0vs/i/Tie-Dye-Maxi-Dress.jpg",
        //           categories: ["dress"],
        //           size: ["s", "m", ],
        //           color: ["white"],
        //           price: 27.99,
        //         },
        //        {
        //           name: "Floral Print Lace Maxi Dress",
        //           desc: "Steal the show in this Crochet Trim Maxi Dress. It has a crochet trim, flounce sleeves, smocked waist, a tassel tie accent, and front and side slits.",
        //           img: "https://media1.popsugar-assets.com/files/thumbor/7utwnQCVoktxLEZ3QJCAHjd5h7Q/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/c102895c7c277fa6_netimg8MSoT7/i/Floral-Print-Lace-Maxi-Dress.jpg",
        //           categories: ["dress"],
        //           size: ["s", "m", ],
        //           color: ["white"],
        //           price: 21.99,
        //         },
        //         {
        //           name: "Striped Sleeveless Dress",
        //           desc: "Steal the show in this Crochet Trim Maxi Dress. It has a crochet trim, flounce sleeves, smocked waist, a tassel tie accent, and front and side slits.",
        //           img: "https://media1.popsugar-assets.com/files/thumbor/77TCkTnfkLafoQnXK3kdG6CSMv8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/1b4c41d0bbb35d7a_netimgEgcaxh/i/Striped-Sleeveless-Dress.jpg",
        //           categories: ["dress"],
        //           size: ["s", "m", ],
        //           color: ["white"],
        //           price: 25.99,
        //         },
        //            {
        //           name: "Striped Cotton-Blend Dress",
        //           desc: "Steal the show in this Crochet Trim Maxi Dress. It has a crochet trim, flounce sleeves, smocked waist, a tassel tie accent, and front and side slits.",
        //           img: "https://media1.popsugar-assets.com/files/thumbor/6LOSztAMNiy6Uf8edVhHvY9oS5c/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/7eba49287b612ffc_netimg6wnrQ4/i/Striped-Cotton-Blend-Dress.jpg",
        //           categories: ["dress"],
        //           size: ["s", "m", ],
        //           color: ["white"],
        //           price: 24.99,
        //         },
        //       {
        //           name: "Flounce Maxi Dress",
        //           desc: "Steal the show in this Crochet Trim Maxi Dress. It has a crochet trim, flounce sleeves, smocked waist, a tassel tie accent, and front and side slits.",
        //           img: "https://media1.popsugar-assets.com/files/thumbor/WYTgroQiKSBCdiEeSbqApGvev8I/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/70a968df038991f6_netimgCdaBqa/i/Flounce-Maxi-Dress.jpg",
        //           categories: ["dress"],
        //           size: ["s", "m", ],
        //           color: ["white"],
        //           price: 24.99,
        //         },
//     {
//       name: "Cami-Blend Mini Dress",
//       desc: "A gauze woven dress featuring a surplice neckline, cutout straps, low-cut back, self-tie back closure, maxi length, and a front M-silt.",
//       img: "https://media1.popsugar-assets.com/files/thumbor/L7C3sLadIFIyz7Wk7roPFzL8j3E/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/31/939/n/1922564/3b4b3061e59a0925_netimga6fIJK/i/Linen-Blend-Cami-Mini-Dress.jpg",
//       categories: ["dress"],
//       size: ["s", "m", "l"],
//       color: ["yellow"],
//       price: 19.99,
//     },
    //     {
    //       name: "Basic High-Rise Leggings",
    //       desc: "A pair of knit leggings crafted from organically grown cotton that features a high rise, banded waist, and a heathered construction",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwdb60ef7d/1_front_750/00436768-04.jpg",
    //       categories: ["bottoms"],
    //       size: ["s", "m", "l"],
    //       color: ["black"],
    //       price: 17.99,
    //     },
    //     {
    //       name: "Seamless Padded Bralette",
    //       desc: "A seamless knit bralette featuring removable padding and adjustable cami straps.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd1ea1a68/1_front_750/00442948-01.jpg",
    //       categories: ["lingerie"],
    //       size: ["s", "m", "l"],
    //       color: ["black"],
    //       price: 15.9,
    //     },
    //     {
    //         name: "Faux Leather O-Ring Bodysuit",
    //         desc: "A faux leather bodysuit featuring a V-neckline, front cutout with a high-polish O-ring, adjustable cami straps, straight-cut back, and a cheeky-cut bottom.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw953d8829/1_front_750/00445266-01.jpg",
    //         categories: ["lingerie"],
    //         size: ["s", "m", "l"],
    //         color: ["black"],
    //         price: 21.9,
    //       },
    //     {
    //       name: "FUBU Cropped Jacket",
    //       desc: 'From our Forever 21 x FUBU collection, this woven jacket features "FUBU" chest embroidery, snap-button front closures, a basic collar, dropped long sleeves, and a cropped hem.',
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwe8bbd5d0/1_front_750/00455884-01.jpg",
    //       categories: ["outerwear"],
    //       size: ["s", "m", "l"],
    //       color: ["black", "white", "blue"],
    //       price: 29.99,
    //     },
    //     {
    //       name: " Raglan-Sleeve Crop Top",
    //       desc: "An athletic knit crop top featuring a crew neck and short raglan sleeves.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwd0005584/1_front_750/00456777-01.jpg",
    //       categories: ["tops"],
    //       size: ["xs", "s", "m", "l"],
    //       color: ["black", "white", "blue"],
    //       price: 11.99,
    //     },
    //     {
    //       name: "Ruffle-Trim Duster Kimono",
    //       desc: "A semi-sheer woven duster kimono featuring tiered ruffle trim, long peasant sleeves, a front self-tie closure, and longline silhouette.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwc88a3345/1_front_750/00459381-01.jpg",
    //       categories: ["outerwear"],
    //       size: ["s", "m", "l"],
    //       color: ["white"],
    //       price: 11.9,
    //     },
    //     {
    //         name: "French Terry Dolphin-Hem Shacket",
    //         desc: "A French terry shacket featuring a button front, chest flap pockets, long sleeves, and a dolphin hem.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw15362388/1_front_750/00426325-01.jpg",
    //         categories: ["outerwear"],
    //         size: ["s", "m", "l"],
    //         color: ["black"],
    //         price: 20.9,
    //       },
    //     {
    //       name: "Ribbed Lace-Trim Bralette",
    //       desc: "A heathered ribbed knit bralette featuring scalloped lace trim, dual adjustable cami straps, and pull-on styling.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwe26b059c/1_front_750/00454651-02.jpg",
    //       categories: ["lingerie"],
    //       size: ["s", "m"],
    //       color: ["cream"],
    //       price: 11.9,
    //     },
    //     {
    //       name: "Foldover Lounge Pants",
    //       desc: "A pair of knit lounge pants featuring a foldover waistband, slant front pockets, and relaxed fit.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw2e8d9b8d/1_front_750/00457502-01.jpg",
    //       categories: ["bottoms"],
    //       size: ["s", "l"],
    //       color: ["grey"],
    //       price: 11.9,
    //     },
    //     {
    //       name: "Corduroy High-Low Shacket",
    //       desc: "A corduroy shacket featuring button-front closures, a high-low curved hem, long sleeves, a basic collar, and chest patch pocket.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwcdca44fa/1_front_750/00454097-01.jpg",
    //       categories: ["tops"],
    //       size: ["s", "l"],
    //       color: ["white"],
    //       price: 14.9,
    //     },
    //     {
    //       name: "High-Low Shacket",
    //       desc: "A corduroy shacket featuring button-front closures, a high-low curved hem, long sleeves, a basic collar, and chest patch pocket.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwcdca44fa/1_front_750/00454097-03.jpg",
    //       categories: ["tops"],
    //       size: ["m", "l"],
    //       color: ["cream"],
    //       price: 14.9,
    //     },
    //     {
    //       name: "Fleece Hoodie",
    //       desc: "A corduroy shacket featuring button-front closures, a high-low curved hem, long sleeves, a basic collar, and chest patch pocket.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwc8f6c6fa/1_front_750/00455408-01.jpg",
    //       categories: ["tops"],
    //       size: ["s", "l"],
    //       color: ["grey"],
    //       price: 12.9,
    //     },
    //     {
    //       name: "Basic Fleece Zip-Up Hoodie",
    //       desc: "A corduroy shacket featuring button-front closures, a high-low curved hem, long sleeves, a basic collar, and chest patch pocket.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwc8f6c6fa/1_front_750/00455408-18.jpg",
    //       categories: ["tops"],
    //       size: ["s", "l", "xl"],
    //       color: ["white"],
    //       price: 12.9,
    //     },
    //     {
    //       name: "Basic Fleece Zip-Up Hoodie",
    //       desc: "A corduroy shacket featuring button-front closures, a high-low curved hem, long sleeves, a basic collar, and chest patch pocket.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwc8f6c6fa/1_front_750/00455408-02.jpg",
    //       categories: ["tops"],
    //       size: ["s", "m"],
    //       color: ["black"],
    //       price: 12.9,
    //     },
    //     {
    //       name: "Pull-On Fleece Joggers",
    //       desc: "A pair of fleece joggers featuring an elasticized waist for pull-on styling, single back patch pocket, front slanted pockets, ribbed trim, and a relaxed fit.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw38dff5bb/1_front_750/00444459-06.jpg",
    //       categories: ["bottoms"],
    //       size: ["s", "l", "xl"],
    //       color: ["cream"],
    //       price: 16.9,
    //     },
    //     {
    //         name: "Ribbed Knit Tank Bodysuit",
    //         desc: "A ribbed knit tank bodysuit featuring a plunging neckline, shoulder straps, and a racerback.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw711cbe6e/1_front_750/00455924-01.jpg",
    //         categories: ["tops"],
    //         size: ["s", "l", "xl"],
    //         color: ["cream"],
    //         price: 16.9,
    //       },
    //     {
    //       name: "Heathered Leggings",
    //       desc: "A pair of fleece joggers featuring an elasticized waist for pull-on styling, single back patch pocket, front slanted pockets, ribbed trim, and a relaxed fit.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwcf718fb7/1_front_750/00441318-01.jpg",
    //       categories: ["bottoms"],
    //       size: ["xs", "m", "l"],
    //       color: ["black"],
    //       price: 9.9,
    //     },
    //     {
    //       name: "Seamless High-Rise Leggings",
    //       desc: "An athletic pair of knit leggings featuring breathable wicking fabric, a fit that sculpts, lifts, and smooths, seamless construction with seams that lay flat for ultimate comfort, ribbed trim, and a high rise.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwc6f1eb45/1_front_750/00442929-01.jpg",
    //       categories: ["bottoms"],
    //       size: ["xs", "m", "l"],
    //       color: ["black"],
    //       price: 10.9,
    //     },
    //     {
    //       name: "Quilted Jacket",
    //       desc: "A knit jacket featuring an allover quilted construction, mineral wash, dropped long sleeves, funnel neck, slant front pockets, and a zip front.",
    //       img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwe6a54e45/1_front_750/00443773-08.jpg",
    //       categories: ["outerwear"],
    //       size: ["m", "l", "xl"],
    //       color: ["pink"],
    //       price: 10.9,
    //     },
    //     {
    //         name: "Surplice Cami Maxi Dress",
    //         desc: "A gauze woven dress featuring a surplice neckline, cutout straps, low-cut back, self-tie back closure, maxi length, and a front M-silt.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw8b813cea/1_front_750/00460283-01.jpg",
    //         categories: ["dress"],
    //         size: ["s", "m", "l"],
    //         color: ["black"],
    //         price: 21.9,
    //       },
    //       {
    //         name: "Plunging Strappy Mini Dress",
    //         desc: "A woven mini dress featuring a plunging neckline, shoulder straps, back cutouts with elasticized straps forming a caged design, and a subtle fit and flare silhouette.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwe2d98614/1_front_750/00460028-01.jpg",
    //         categories: ["dress"],
    //         size: ["s", "m", "l"],
    //         color: ["pink"],
    //         price: 33,
    //       },
    //       {
    //         name: "Sweater-Knit Crisscross Crop Top",
    //         desc: "A ribbed sweater-knit crop top featuring a square neck and shoulder straps that crisscross above a cutout and self-tie back.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw0cd8dcd3/1_front_750/00448088-09.jpg",
    //         categories: ["tops"],
    //         size: ["s", "m"],
    //         color: ["red"],
    //         price: 9.90,
    //       },
    //       {
    //         name: "Sweater-Knit  Crop Top",
    //         desc: "A knit tee featuring a draped relaxed fit, crew neck, and short sleeves.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw71be2a79/1_front_750/00459048-01.jpg",
    //         categories: ["tops"],
    //         size: ["s", "m", "l"],
    //         color: ["red"],
    //         price: 10.90,
    //       },
    //       {
    //         name: "Make Your Own Luck Crop Top",
    //         desc: "A ribbed knit tank top featuring a crew neck, front \"Make Your Own Luck\" text with dice graphics, checkered pattern trim, and a cropped hem.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw9c8c4b22/1_front_750/00453556-01.jpg",
    //         categories: ["tops"],
    //         size: ["s", "l"],
    //         color: ["cream"],
    //         price: 11.90,
    //       },
    //       {
    //         name: "Make Your Own Luck Crop Top",
    //         desc: "A ribbed knit tank top featuring a crew neck, front \"Make Your Own Luck\" text with dice graphics, checkered pattern trim, and a cropped hem.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw9c8c4b22/1_front_750/00453556-01.jpg",
    //         categories: ["tops"],
    //         size: ["s", "l"],
    //         color: ["cream"],
    //         price: 11.90,
    //       },
    //       {
    //         name: "Distressed Flare Jeans",
    //         desc: "A pair of flare jeans featuring distressing, whiskering, belt loops, slant front pockets, back patch pockets, and a high rise.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw5fcbc104/1_front_750/00453401-02.jpg",
    //         categories: ["bottoms"],
    //         size: ["s","m", "l"],
    //         color: ["blue"],
    //         price: 14.90,
    //       },
    //       {
    //         name: "Cotton Pocket Shirt",
    //         desc: "A cotton shirt featuring dropped long sleeves, a chest patch pocket, button-front closures, a dolphin hem, and basic collar.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwedbdbe0f/1_front_750/00459362-01.jpg",
    //         categories: ["bottoms"],
    //         size: ["s","m", "l"],
    //         color: ["white"],
    //         price: 19.90,
    //       },
    //       {
    //         name: "Twill Drawstring Paperbag Shorts",
    //         desc: "A pair of twill shorts featuring a paperbag high-rise waist with drawstring closure, zip fly with concealed button closure, slanted front pockets, pleated details, and back flap pockets.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwf4802707/1_front_750/00459518-01.jpg",
    //         categories: ["bottoms"],
    //         size: ["s", "l"],
    //         color: ["blue"],
    //         price: 14.90,
    //       },
    //       {
    //         name: "Corduroy Drop-Waist Mini Skort",
    //         desc: "A corduroy drop-waist skort featuring a high-rise waist, concealed side zipper, a mini length, and topstitched knife pleats on the hem.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw526c100f/1_front_750/00441562-03.jpg",
    //         categories: ["bottoms"],
    //         size: ["s","m"],
    //         color: ["olive"],
    //         price: 18.90,
    //       },
    //       {
    //         name: "Ruched Drawstring Crop Top",
    //         desc: "A seersucker crop top featuring a sweetheart neckline, ruched drawstring front, smocked back panel, long trumpet sleeves, and ruffled trim.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw4f01982a/1_front_750/00454093-01.jpg",
    //         categories: ["tops"],
    //         size: ["s","m", "l"],
    //         color: ["blue"],
    //         price: 15.90,
    //       },
    //       {
    //         name: "Checkered High-Rise Jeans",
    //         desc: "A pair of high-rise jeans featuring an allover vintage-inspired wash, checkered print, five-pocket construction, belt loops, and a straight leg.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwf786eb00/1_front_750/00442937-01.jpg",
    //         categories: ["bottoms"],
    //         size: ["s","m", "l"],
    //         color: ["blue"],
    //         price: 14.90,
    //       },
    //       {
    //         name: "Twill High-Rise Cuffed Shorts",
    //         desc: "A pair of twill shorts featuring an elasticized high-rise waist, four-pocket construction, and a cuffed hem.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw84cf87db/1_front_750/00455724-11.jpg",
    //         categories: ["bottoms"],
    //         size: ["s","m", "l"],
    //         color: ["cream"],
    //         price: 14.90,
    //       },
    //       {
    //         name: "Rectangular Tinted Sunglasses",
    //         desc: "A pair of sunglasses featuring rectangular frames and tinted lenses.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dwbe14d722/1_front_750/00457395-02.jpg",
    //         categories: ["accessories"],
    //         size: [],
    //         color: ["blue"],
    //         price: 7.90,
    //       },
    //       {
    //         name: "Teddy Bear Cocktail Ring Set",
    //         desc: "A set of cocktail rings featuring wide bands, some with marble finishes, and teddy bear and heart embellishments.",
    //         img: "https://www.forever21.com/on/demandware.static/-/Sites-f21-master-catalog/default/dw3fd02ab7/1_front_750/00456831-01.jpg",
    //         categories: ["accessories"],
    //         size: [],
    //         color: ["pink"],
    //         price: 9.90,
    //       },
//   ];
//   try {
//     const seedItems = await Products.create(allProducts);
//     res.json(seedItems);
//   } catch (error) {
//     res.send(error.message);
//   }
// });