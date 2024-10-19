interface President {
  name: string;
  term: string; // e.g. "2021-2024"
  party: string; // e.g. "Democratic", "Republican", etc.
}

const presidents: President[] = [
  {
    name: "George Washington",
    term: "1789-1797",
    party: "Independent",
  },
  {
    name: "John Adams",
    term: "1797-1801",
    party: "Federalist",
  },
  {
    name: "Thomas Jefferson",
    term: "1801-1809",
    party: "Democratic-Republican",
  },
  {
    name: "James Madison",
    term: "1809-1817",
    party: "Democratic-Republican",
  },
  {
    name: "James Monroe",
    term: "1817-1825",
    party: "Democratic-Republican",
  },
  {
    name: "John Quincy Adams",
    term: "1825-1829",
    party: "Democratic-Republican",
  },
  {
    name: "Andrew Jackson",
    term: "1829-1837",
    party: "Democratic",
  },
  {
    name: "Martin Van Buren",
    term: "1837-1841",
    party: "Democratic",
  },
  {
    name: "William Henry Harrison",
    term: "1841-1841",
    party: "Whig",
  },
  {
    name: "John Tyler",
    term: "1841-1845",
    party: "Whig/Independent",
  },
  {
    name: "James K. Polk",
    term: "1845-1849",
    party: "Democratic",
  },
  {
    name: "Zachary Taylor",
    term: "1849-1850",
    party: "Whig",
  },
  {
    name: "Millard Fillmore",
    term: "1850-1853",
    party: "Whig",
  },
  {
    name: "Franklin Pierce",
    term: "1853-1857",
    party: "Democratic",
  },
  {
    name: "James Buchanan",
    term: "1857-1861",
    party: "Democratic",
  },
  {
    name: "Abraham Lincoln",
    term: "1861-1865",
    party: "Republican",
  },
  {
    name: "Andrew Johnson",
    term: "1865-1869",
    party: "National Union/Democratic",
  },
  {
    name: "Ulysses S. Grant",
    term: "1869-1877",
    party: "Republican",
  },
  {
    name: "Rutherford B. Hayes",
    term: "1877-1881",
    party: "Republican",
  },
  {
    name: "James A. Garfield",
    term: "1881-1881",
    party: "Republican",
  },
  {
    name: "Chester A. Arthur",
    term: "1881-1885",
    party: "Republican",
  },
  {
    name: "Grover Cleveland",
    term: "1885-1889",
    party: "Democratic",
  },
  {
    name: "Benjamin Harrison",
    term: "1889-1893",
    party: "Republican",
  },
  {
    name: "Grover Cleveland",
    term: "1893-1897",
    party: "Democratic",
  },
  {
    name: "William McKinley",
    term: "1897-1901",
    party: "Republican",
  },
  {
    name: "Theodore Roosevelt",
    term: "1901-1909",
    party: "Republican",
  },
  {
    name: "William Howard Taft",
    term: "1909-1913",
    party: "Republican",
  },
  {
    name: "Woodrow Wilson",
    term: "1913-1921",
    party: "Democratic",
  },
  {
    name: "Warren G. Harding",
    term: "1921-1923",
    party: "Republican",
  },
  {
    name: "Calvin Coolidge",
    term: "1923-1929",
    party: "Republican",
  },
  {
    name: "Herbert Hoover",
    term: "1929-1933",
    party: "Republican",
  },
  {
    name: "Franklin D. Roosevelt",
    term: "1933-1945",
    party: "Democratic",
  },
  {
    name: "Harry S. Truman",
    term: "1945-1953",
    party: "Democratic",
  },
  {
    name: "Dwight D. Eisenhower",
    term: "1953-1961",
    party: "Republican",
  },
  {
    name: "John F. Kennedy",
    term: "1961-1963",
    party: "Democratic",
  },
  {
    name: "Lyndon B. Johnson",
    term: "1963-1969",
    party: "Democratic",
  },
  {
    name: "Richard Nixon",
    term: "1969-1974",
    party: "Republican",
  },
];

export default defineEventHandler((event) => {
  return { 'presidents': presidents };
});