export let visibilityObserverMixin = Base => class extends Base {

    recalcWhenVisible(vComponent) {
        vComponent.hidden_on_create = vComponent.element.offsetParent === null;
        if(vComponent.hidden_on_create){
            // If the component is hidden in DOM for any number of reasons (parent is hidden) then the
            // Text Field may no render correctly. In this case we observe the DOM watching for a point at which the
            // element become visible in the DOM and at that point using the MDCComponent to properly re-render that
            // element
            vComponent.mutationObserver = new MutationObserver(function(mutations) {
                if(this.vComponent.hidden_on_create) {
                    if(this.vComponent.element.offsetParent !== null){
                        // Parent is now visible. Re-run the MDC layout and disconnect from the observer
                        this.vComponent.hidden_on_create = false;
                        this.vComponent.mdcComponent.layout();
                        this.disconnect();
                    }
                }
            });
            vComponent.mutationObserver.vComponent = vComponent;
            vComponent.mutationObserver.observe(document.documentElement, {
                attributes: true,
                subtree: true
            });
        }

    }
};
