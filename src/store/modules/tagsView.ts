import {defineStore} from 'pinia';

export const useTagsViewStore = defineStore('tagsViewStore',{
  state: () => ({
      visitedViews: <any>[],
      cachedViews: []
  }),
  actions: {
    async ADD_VISITED_VIEW(view: any){
      if (this.visitedViews.some((v:any) => v.path === view.path)) return;
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      )
    },
  }
  
})