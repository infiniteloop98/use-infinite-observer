const useInfiniteObserver = () => {
  /**
   * Create new observer
   * @param {Node} element
   * @param {Function} callback
   * @param {Object} config
   * @returns {Boolean|Object}
   */
  const create = (
    element,
    callback,
    config = { attributes: true, childList: true, subtree: true }
  ) => {
    try {
      const mutation = new MutationObserver(callback);
      mutation.observe(element, config);
      return mutation;
    } catch (error) {
      return error;
    }
  };
  return create;
};

export default useInfiniteObserver;
