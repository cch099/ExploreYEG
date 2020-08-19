// @flow strict
import React from "react";
import styles from "./Search.module.scss";
import type { AllMarkdownRemark } from "../../types";

type Props = {
  setEdges: any,
  allEdges: AllMarkdownRemark.edges
};

const Search = ({ setEdges, allEdges }: Props) => {
  const handleInputChange = (event) => {
    const query = event.target.value;
    const hasSearchResults = allEdges && query !== '';
    const allPosts = allEdges;
    const posts = allEdges;
    // return all filtered posts
    const filteredData = hasSearchResults ? posts.filter((post) => {
      // destructure data from post frontmatter
      const { description, title, tags } = post.node.frontmatter;
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join('') // convert tags from an array to string
            .toLowerCase()
            .includes(query.toLowerCase()))
      );
    }) : allPosts;
    // update state according to the latest query and results
    setEdges({
      filteredData, // with current query string from the `Input` event
    });
  };

  return (
    <div className={styles["search"]}>
      <input
        type="text"
        aria-label="Search"
        placeholder="Type to filter posts..."
        onChange={handleInputChange}
      />
    </div>
  );
};
export default Search;
