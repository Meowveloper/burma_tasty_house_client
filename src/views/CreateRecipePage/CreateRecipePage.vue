<template>
    <div>
        <FirstHeader @header-height="setHeaderHeight"></FirstHeader>
        <h1 class="theFirstH1" ref="theFirstH1">Create Your Own Recipe</h1>
        <div
            class="contentContainer"
            ref="contentContainer"
            :style="{
                ...{
                    height: `calc(100vh - ${headerHeight + firstH1Height}px)`,
                },
            }"
        >
            <SideNavBar @navigate="navigate"></SideNavBar>
            <div class="leftFormContainer">
                <KeepAlive>
                    <component :is="activeFormComponent"></component>
                </KeepAlive>

                <button
                    :disabled="!overAllValidation"
                    class="createButton"
                    @click="createNewRecipe"
                >
                    <template v-if="!createLoading"> Create </template>
                    <div class="createLoader" v-else></div>
                </button>
            </div>
        </div>
    </div>
</template>

<script src="./CreateRecipePage.js"></script>

<style lang="css" scoped src="./CreateRecipePage.css"></style>
