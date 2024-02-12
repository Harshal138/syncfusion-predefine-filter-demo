export const dataSource = {
  "syncGridPredefineFilters": {
    "skip": 0,
    "take": 10,
    "antiForgery": null,
    "requiresCounts": true,
    "table": null,
    "group": [
      "uniqueTitle"
    ],
    "select": null,
    "expand": null,
    "sorted": [
      {
        "name": "regDate",
        "direction": "ascending"
      },
      {
        "name": "uniqueTitle",
        "direction": "ascending"
      }
    ],
    "search": null,
    "where": null,
    "aggregates": null,
    "onDemandGroupInfo": null,
    "isLazyLoad": false
  },
  "gridResponse": {
    "count": 5,
    "result": [
      {
        "regDate": "2024-01-08",
        "uniqueTitle": "Fox Creaction",
        "uniqueNo": "FXSA002"
      },
      {
        "regDate": "2024-01-08",
        "uniqueTitle": "Fox Creaction",
        "uniqueNo": "FXSA001"
      },
      {
       "regDate": "2024-01-23",
        "uniqueTitle": "Fox Creaction",
        "uniqueNo": "FXSA004"
      },
      {
       "regDate": "2024-01-23",
        "uniqueTitle": "Fox Creaction",
        "uniqueNo": "FXSA005"
      },
      {
        "regDate": "2024-01-23",
        "uniqueTitle": "Fox Creaction",
        "uniqueNo": "FXSA003"
      }
    ],
    "groupDs": [
      {
        "uniqueTitle": "Fox Creaction"
      },
      {
        "uniqueTitle": "Fox Creaction"
      },
      {
        "uniqueTitle": "Fox Creaction"
      },
      {
        "uniqueTitle": "Fox Creaction"
      },
      {
        "uniqueTitle": "Fox Creaction"
      }
    ]
  }
}

export const withoutFilterDataSource  = [
  {
    "id": 1,
    "name": "18%",
    "percentage": 18
  },
  {
    "id": 2,
    "name": "5%",
    "percentage": 5
  },
  {
    "id": 4,
    "name": "12%",
    "percentage": 12
  },
  {
    "id": 5,
    "name": "sal",
    "percentage": 15
  },
  {
    "id": 6,
    "name": "28%",
    "percentage": 28
  }
]

export const nameColumnGroupDataSource = {
  "count": 5,
  "result": [
    {
      "id": 1,
      "name": "18%",
      "percentage": 18
    },
    {
      "id": 2,
      "name": "5%",
      "percentage": 5
    },
    {
      "id": 4,
      "name": "12%",
      "percentage": 12
    },
    {
      "id": 5,
      "name": "sal",
      "percentage": 15
    },
    {
      "id": 6,
      "name": "28%",
      "percentage": 28
    }
  ],
  "groupDs": [
    {
      "name": "18%"
    },
    {
      "name": "5%"
    },
    {
      "name": "12%"
    },
    {
      "name": "sal"
    },
    {
      "name": "28%"
    }
  ],
  "additional": null
}

export const percentageColumnGroupDataSource = {
  "count": 5,
  "result": [
    {
      "id": 1,
      "name": "18%",
      "percentage": 18
    },
    {
      "id": 2,
      "name": "5%",
      "percentage": 5
    },
    {
      "id": 4,
      "name": "12%",
      "percentage": 12
    },
    {
      "id": 5,
      "name": "sal",
      "percentage": 15
    },
    {
      "id": 6,
      "name": "28%",
      "percentage": 28
    }
  ],
  "groupDs": [
    {
      "percentage": 18
    },
    {
      "percentage": 5
    },
    {
      "percentage": 12
    },
    {
      "percentage": 15
    },
    {
      "percentage": 28
    }
  ],
  "additional": null
};



export const nameWithPercenTageGroupSorting = {
  "count": 5,
  "result": [
    {
      "id": 4,
      "name": "12%",
      "percentage": 12
    },
    {
      "id": 1,
      "name": "18%",
      "percentage": 18
    },
    {
      "id": 6,
      "name": "28%",
      "percentage": 28
    },
    {
      "id": 2,
      "name": "5%",
      "percentage": 5
    },
    {
      "id": 5,
      "name": "sal",
      "percentage": 15
    }
  ],
  "groupDs": [
    {
      "name": "18%"
    },
    {
      "name": "5%"
    },
    {
      "name": "12%"
    },
    {
      "name": "sal"
    },
    {
      "name": "28%"
    }
  ],
  "additional": null
}
