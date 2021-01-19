class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find params[:id]
  end

  def new
  end

  def create
    planet = Planet.create :name => params[:name], :image => params[:image], :orbit => params[:orbit], :diameter => params[:diameter], :mass => params[:mass], :distance_from_earth => params[:distance_from_earth], :moons => params[:moons]
    redirect_to planet_path(planet.id) # show page
  end
end
