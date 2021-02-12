var reverse = (list, clone) => clone ? reverse([...list]) : list.reverse();

export { reverse };
