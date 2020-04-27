<template>
  <div class="container" style="padding-top:5em;">
    <h1>{{ service }}</h1>
    <div class="row">
      <div
        v-for="pricingPackage in allPricing"
        class="col-sm-5"
        style="background-color:rgb(255,255,255,.7); padding:2em;margin:.5em; border-radius:1em;"
        :key="pricingPackage.title"
        v-html="pricingPackage.content"
      />
    </div>
  </div>
</template>

<static-query>
query Content {
  allPricing: allPricing {
    edges {
      node {
        id
        title
        category
        content
        price
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      packages: {
        weddings: [
          {
            name: "The Works",
            price: "$2695",
            details: [
              "2 Photographers up to 10 hours of coverage.",
              "Engagement Shoot",
              "Several hundred fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.",
              "Photo/copyright release to print and share all images as you desire."
            ]
          },
          {
            name: "The Next Best Thing",
            price: "$2,195.00",
            details: [
              "2 photographers up to 7 hours of coverage.",
              "Engagement Shoot.",
              "200+ fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.",
              "Photo/copyright release to print and share all images as you desire."
            ]
          },
          {
            name: "Lean and Mean",
            price: "$1,895.00",
            details: [
              "2 photographers up to 7 hours of coverage.",
              "200+ fully-edited, high-resolution, digital images delivered via Dropbox link within 2 weeks.",
              "Photo/copyright release to print and share all images as you desire."
            ]
          },
          {
            name: "Down and Dirty",
            price: "$750.00",
            details: [
              "1 photographers up to 5 hours of coverage.",
              "100+ fully-edited, high-resolution, digital images delivered via Dropbox link within 10 weeks.",
              "Photo/copyright release to print and share all images as you desire."
            ]
          },
          {
            name: "Ala Carte",
            price: "",
            details: [
              "Engagement Session $350.00",
              "Each additional hour of coverage 1 photographer $200.00",
              "Each additional hour of coverage 2 photographers $300.00",
              'Wedding Montage Canvas 24" x 36" $500.00',
              'Wedding Montage Canvas 30" x 40" $750.00',
              "Wedding Album - Starting at $600.00",
              "Aerial Photography/Videography Add On $300.00"
            ]
          }
        ],
        seniors: [
          {
            name: "The Works",
            price: "$400",
            details: [
              "Up to 3 hours of shooting.",
              "No limit to number of locations.",
              "No limit to number of clothing changes.",
              "25+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.",
              "Photo/copyright release to share and print all images as you desire."
            ]
          },
          {
            name: "Down and Dirty",
            price: "$150.00",
            details: [
              "1/2 hour shoot.",
              "One location.",
              "No clothing changes.",
              "5 fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.",
              "Photo/copyright release to share and print all images as you desire."
            ]
          },
          {
            name: "Ala Carte",
            price: "",
            details: [
              'Sports/Music Montage Canvas 24" x 36" $500.00*',
              'Sports/Music Montage Canvas 30" x 40" $750.00*',
              "*requires an extra 45 minute shoot."
            ]
          }
        ],
        family: [
          {
            name: "The Works",
            price: "$300",
            details: [
              "Up to 2 hours of shooting",
              "1 Location",
              "15+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.",
              "Photo/copyright release to share and print all images as you desire."
            ]
          },
          {
            name: "Down and Dirty",
            price: "$150.00",
            details: [
              "1/2 hour shoot",
              "1 Location",
              "5 fully-edited, high-resolution, digital images delivered to you via Dropbox link within 7 days.",
              "Photo/copyright release to share and print all images as you desire."
            ]
          }
        ],
        events: [
          {
            name: "The Works",
            price: "$750.00",
            details: [
              "Up to 5 hours of shooting.",
              "1 Photographer",
              "As Many Locations as you like.",
              "100+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 10 days.",
              "Photo/copyright release to share and print all images as you desire."
            ]
          },
          {
            name: "Down and Dirty",
            price: "$300.00",
            details: [
              "1 hour of shooting.",
              "1 Photographer",
              "1 location",
              "30+ fully-edited, high-resolution, digital images delivered to you via Dropbox link within 10 days.",
              "Photo/copyright release to share and print all images as you desire."
            ]
          },
          {
            name: "Ala Carte",
            price: "",
            details: ["Aerial Photography/Videography Add On $300.00"]
          }
        ],
        aerial: [
          {
            name: "The Works",
            price: "$900.00",
            details: [
              "Full coverage photography and videography",
              "40+ high resolution images",
              "Professional editing."
            ]
          },
          {
            name: "The Next Best Thing",
            price: "$600.00",
            details: [
              "10-20 high resolution images",
              "60-90 second video",
              "Professional editing"
            ]
          },
          {
            name: "Lean and Mean",
            price: "$350.00",
            details: ["10-20 high resolution images", "Professional editing"]
          },
          {
            name: "Ala Carte",
            price: "",
            details: ["Aerial Photography/Videography Add On $300.00"]
          }
        ]
      }
    };
  },
  props: ["service"],
  computed: {
    allPricing() {
      const output = this.$static.allPricing.edges
        .map(edge => edge.node)
        .filter(node => node.category == this.service);
      return output.sort(function(a, b) {
        return b.price - a.price;
      });
    }
  },
  methods: {},
};
</script>

<style>
</style>