import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faPlus,
  faMugHot,
  faUtensils,
  faBowlFood,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data - will come from state/API later
  const dailyCalories = 1432;
  const goalCalories = 1910;
  const calorieProgress = (dailyCalories / goalCalories) * 100;

  const macros = {
    protein: { current: 85, goal: 136 },
    carbs: { current: 165, goal: 221 },
    fats: { current: 38, goal: 53 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Cal AI</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <FontAwesomeIcon icon={faCog} className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* Date Selector */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <Button variant="ghost">Yesterday</Button>
          <Button variant="default" className="rounded-xl">
            Today
          </Button>
        </div>

        {/* Daily Calories Overview */}
        <Card className="mb-8 border-none p-8 shadow-sm">
          <div className="text-center">
            <p className="mb-2 text-sm text-muted-foreground">Daily Calories</p>
            <div className="mb-4 text-6xl font-bold">{dailyCalories}</div>
            <p className="mb-4 text-muted-foreground">Goal: {goalCalories} cal</p>
            <Progress value={calorieProgress} className="h-3" />
            <p className="mt-2 text-sm text-muted-foreground">
              {goalCalories - dailyCalories} calories remaining
            </p>
          </div>
        </Card>

        {/* Macros Section */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="border-none p-6 shadow-sm">
            <div className="text-center">
              <p className="mb-2 text-sm font-semibold">Protein</p>
              <div className="mb-2 text-3xl font-bold text-accent">
                {macros.protein.current}g
              </div>
              <Progress
                value={(macros.protein.current / macros.protein.goal) * 100}
                className="mb-2 h-2"
              />
              <p className="text-xs text-muted-foreground">
                of {macros.protein.goal}g
              </p>
            </div>
          </Card>

          <Card className="border-none p-6 shadow-sm">
            <div className="text-center">
              <p className="mb-2 text-sm font-semibold">Carbs</p>
              <div className="mb-2 text-3xl font-bold text-warning">
                {macros.carbs.current}g
              </div>
              <Progress
                value={(macros.carbs.current / macros.carbs.goal) * 100}
                className="mb-2 h-2"
              />
              <p className="text-xs text-muted-foreground">
                of {macros.carbs.goal}g
              </p>
            </div>
          </Card>

          <Card className="border-none p-6 shadow-sm">
            <div className="text-center">
              <p className="mb-2 text-sm font-semibold">Fats</p>
              <div className="mb-2 text-3xl font-bold text-destructive">
                {macros.fats.current}g
              </div>
              <Progress
                value={(macros.fats.current / macros.fats.goal) * 100}
                className="mb-2 h-2"
              />
              <p className="text-xs text-muted-foreground">of {macros.fats.goal}g</p>
            </div>
          </Card>
        </div>

        {/* Meals Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Today's Meals</h2>

          <Card className="border-none p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <FontAwesomeIcon icon={faMugHot} className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Breakfast</p>
                  <p className="text-sm text-muted-foreground">0 cal</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/dashboard/add-meal?type=breakfast")}
              >
                <FontAwesomeIcon icon={faPlus} className="h-5 w-5" />
              </Button>
            </div>
          </Card>

          <Card className="border-none p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/10">
                  <FontAwesomeIcon icon={faUtensils} className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="font-semibold">Lunch</p>
                  <p className="text-sm text-muted-foreground">0 cal</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/dashboard/add-meal?type=lunch")}
              >
                <FontAwesomeIcon icon={faPlus} className="h-5 w-5" />
              </Button>
            </div>
          </Card>

          <Card className="border-none p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                  <FontAwesomeIcon icon={faBowlFood} className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold">Dinner</p>
                  <p className="text-sm text-muted-foreground">0 cal</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/dashboard/add-meal?type=dinner")}
              >
                <FontAwesomeIcon icon={faPlus} className="h-5 w-5" />
              </Button>
            </div>
          </Card>

          <Card className="border-none p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                  <FontAwesomeIcon icon={faCookie} className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="font-semibold">Snacks</p>
                  <p className="text-sm text-muted-foreground">0 cal</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/dashboard/add-meal?type=snack")}
              >
                <FontAwesomeIcon icon={faPlus} className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Floating Add Button */}
        <Button
          onClick={() => navigate("/dashboard/add-meal")}
          className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg"
          size="icon"
        >
          <FontAwesomeIcon icon={faPlus} className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
