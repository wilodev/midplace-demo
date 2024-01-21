export interface HookOutput<TState = object, TActions = object> {
	state: TState;
	actions: TActions;
}
